import { ChangeEvent, FormEvent, useState } from 'react';

const UserProfileForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successfulSubmit, setSuccessfulSubmit] = useState<boolean>(false);

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    console.log('Form submitted:', { name, email, bio });
    setSuccessfulSubmit(true);
  };

  // Function to validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to handle input changes and update state
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setErrors({});
    setSuccessfulSubmit(false);

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'bio':
        setBio(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={bio}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
      <button type="submit">Submit</button>
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      {successfulSubmit && <span style={{ color: 'green' }}>Form submitted successfully</span>}
    </form>
  );
};

export default UserProfileForm;
