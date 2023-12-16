const conn = require("../../models/config/conn");
const { body } = require("express-validator");

const validateRegister = [
  body("email").isEmail().withMessage("Email no válido"),
  body("surname")
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener al menos 2 caracteres"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
  body("name")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres")

    .bail()
    .custom((value, { req }) => {
      return new Promise(async (resolve, reject) => {
        try {
          const [existsUser] = await conn.query(
            `SELECT * FROM users WHERE nombre = ?`,
            [value]
          );
          conn.releaseConnection();
        } catch (error) {
          console.log(error);
        }
      });
    })
    .withMessage("usuario ya existe"),
];

module.exports = validateRegister;
