import axios from "axios";

export function OpeningCreate() {
  const handleOpeningCreate = (params) => {
    axios.post("http://localhost:3000/openings.json", params).then((response) => {
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

  return (
    <div>
      <h3>Add an additional Opening</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          Name: <input name="name" type="text" />
        </div>
        <div className="mb-1">
          Add Image Url: <input name="image_url" type="text" />
        </div>
        <div className="mb-1">
          Description: <input name="description" type="text" />
        </div>
        <div className="mb-1">
          Difficulty: <input name="difficulty" type="text" />
        </div>
        <div className="mb-1">
          Variation: <input name="variation" type="text" />
        </div>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}
