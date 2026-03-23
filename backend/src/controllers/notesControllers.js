export const getNotes = (req, res) => {
    res.json({ message: "Get all notes" });
};

export const createNote = (req, res) => {
    res.json({ message: "Create a new note" });
};

export const updateNote = (req, res) => {
    res.json({ message: `Update note with id ${req.params.id}` });
};

export const deleteNote = (req, res) => {
    res.json({ message: `Delete note with id ${req.params.id}` });
};