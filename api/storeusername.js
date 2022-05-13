const mongoPromise = require("./_mongo");

module.exports = async (req, res) => {
    // const mongo = await mongoPromise;

    res.status(200).json({ message: "testing" });
    return;
    const { username } = req.body;
    if (typeof username != "string" || !username.trim()) {
        res.status(400).json({ message: "Please send the username" });
        return;
    }

    const usersCol = mongo.db().collection("users");
    if (await usersCol.findOne({ _id: username })) {
        res.status(400).json({ message: "User already exists!" });
        return;
    }

    await usersCol.insertOne({ _id: username });

    res.status(200).json({ message: "Username recorded" });
};