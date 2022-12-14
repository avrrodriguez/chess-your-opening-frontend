import axios from "axios";

export function OpeningCreate(props) {
  const handleOpeningCreate = (params) => {
    axios.post("http://localhost:3000/openings.json", params).then((response) => {
      console.log(response.data);
      window.location.href = "/";
    });
  };

  const handleImageEnter = (params) => {
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleImageDelete = () => {
    axios.delete("http://localhost:3000/posts/" + props.opening.opening_image?.id + ".json").then((response) => {
      console.log(response.data);
      window.location.href = "/";
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
      {props.opening.opening_image?.image_url ? (
        <>
          <h3>Opening Image</h3>
          <button className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }} onClick={handleImageDelete}>
            Delete Image
          </button>
        </>
      ) : (
        <>
          <h3>Opening Image</h3>
          <form onSubmit={handleImageSubmit}>
            <input type="hidden" name="opening_id" value={props.opening.id} />
            <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
              Image Name
            </label>
            <input type="text" name="title" />
            <br />
            <label className="p-1 ms-1" style={{ backgroundColor: "#CBC3E3" }}>
              Choose Image
            </label>
            <input type="file" name="image" id="image" />
            <br />
            <button type="submit">Add image</button>
          </form>
        </>
      )}
    </div>
  );
}
