import axios from "axios";

export function OpeningCreate() {
  const handleOpeningCreate = (params) => {
    axios.post("http://localhost:3000/openings.json", params).then((response) => {
      console.log(response.data);
      window.location.href = "/";
    });
  };

  const handleImageEnter = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleOpeningCreate(params);
    event.target.reset();
  };

  const handleImageSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleImageEnter(params);
  };

  return (
    <div className="mt-3">
      <h3>Add an additional Opening</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Name:
          </label>
          <input name="name" type="text" />
        </div>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Description:
          </label>
          <input name="description" type="text" />
        </div>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Difficulty:
          </label>
          <input name="difficulty" type="text" />
        </div>
        <div>
          <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
            Variation:{" "}
          </label>
          <input name="variation" type="text" />
        </div>
        <button className="mt-1" type="Submit">
          Submit
        </button>
      </form>
      <h3>Add Image</h3>
      <form onSubmit={handleImageSubmit}>
        <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
          Opening Name
        </label>
        <input type="text" name="title" />
        <br />
        <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
          Choose Image
        </label>
        <input type="file" name="image" id="image" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
