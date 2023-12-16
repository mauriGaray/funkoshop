const { validationResult } = require("express-validator");

// Middleware para validar datos del formulario

const validateInput = (req, res, next) => {
  const errors = validationResult(req); // almacena los errores de validación
  if (!errors.isEmpty()) {
    // Si hay errores, se los devolvemos al cliente
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // Si no hay errores, continúa con el siguiente middleware
};

module.exports = validateInput;
