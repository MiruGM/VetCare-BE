module.exports = {
    success: (data, message = 'Operación realizada con éxito') => ({
        ok: true,
        data: data,
        message: message,
    }),
    error: (data, message = 'Error en la operación') => ({
        ok: false,
        data: null,
        message: message,
    })
}

// -> Se ha creado un módulo que exporta dos funciones: success y error.
// -> Ambas funciones tienen valores por defecto. 