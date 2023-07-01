const Form = () => {
  return (
    <form
      className="card p-4 shadow"
      id="student_form"
      autoComplete="off"
      noValidate="novalidate"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="name"
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          autoComplete="off"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          autoComplete="off"
          placeholder="Enter your password"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          name="age"
          autoComplete="off"
          placeholder="Enter your age"
        />
      </div>
      <div className="control-wrapper">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
