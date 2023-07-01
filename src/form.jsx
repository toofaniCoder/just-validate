import JustValidate from 'just-validate';
import { useRef, useEffect } from 'react';
import { useSubmit } from 'react-router-dom';

const Form = () => {
  const submit = useSubmit();
  const formRef = useRef(null);
  useEffect(() => {
    const validator = new JustValidate(formRef.current, {
      errorFieldCssClass: 'is-invalid',
      successFieldCssClass: 'is-valid',
      errorLabelCssClass: 'invalid-feedback',
    });
    validator
      .addField('#name', [
        { rule: 'required' },
        { rule: 'minLength', value: 3 },
        { rule: 'maxLength', value: 15 },
      ])
      .addField('#email', [{ rule: 'required' }, { rule: 'email' }])
      .addField('#password', [
        {
          rule: 'required',
        },
        {
          rule: 'password',
        },
      ])
      .addField('#age', [
        { rule: 'required' },
        {
          rule: 'number',
        },
        { rule: 'minNumber', value: 18 },
        { rule: 'maxNumber', value: 80 },
      ])
      .onSuccess((e) => {
        console.log(Object.fromEntries(new FormData(e.target)));
        submit(new FormData(e.target), {
          method: 'post',
        });
      });

    return () => {
      validator.destroy();
    };
  }, []);
  return (
    <form
      ref={formRef}
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
