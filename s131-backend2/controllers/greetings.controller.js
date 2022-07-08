export const greetWithName = (req, res) => {
    res.send(`<h1>Hola ${req.params.name}</h1>`);
}

export const greetWithFullName = (req, res) => {
    res.send(`Hola ${req.params.lastName}, ${req.params.firstName}`);
};