import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../../store/resources/actions";

export default function AddResourceForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [tags, setTags] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    dispatch(addResource(name, type, tags.split(/[, ]+/), url));

    setName("");
    setType("");
    setTags("");
    setUrl("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h2>Add a new resource</h2>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Type:{" "}
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select a type..</option>

              <option value="library">library</option>
              <option value="website">website</option>
              <option value="resource">resource</option>
              <option value="tool">tool</option>
              <option value="cheatsheet">cheatsheet</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Tags (comma and/or space-separated):{" "}
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            URL:{" "}
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Add this resource!</button>
        </p>
      </form>
    </div>
  );
}
