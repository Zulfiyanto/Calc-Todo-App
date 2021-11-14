const { todo } = require("../../models");

exports.AddTodo = async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    const datas = await todo.create(data);
    let todos = await todo.findOne({
      where: { id: datas.id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    console.log(todos);

    res.send({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server error",
    });
  }
};

exports.DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todo.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "success",
      data: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const datas = await todo.update({ ...data }, { where: { id } });

    res.send({
      status: "success",
      datas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.GetTodos = async (req, res) => {
  try {
    const datas = await todo.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      datas,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
