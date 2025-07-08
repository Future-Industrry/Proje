import { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({
    contact: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('اطلاعات ثبت شد:', form);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>ثبت‌نام در سایت</h2>

        <label htmlFor="contact">شماره تلفن یا ایمیل:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="مثلاً *********09 یا your@email.com"
          value={form.contact}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">نام کاربری:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="انتخاب نام کاربری"
          value={form.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">رمز عبور:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="****"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">ثبت‌نام</button>

        <p className="forgot-password">
          رمز عبورت رو فراموش کردی؟  <a href="#" > بازیابی رمز </a></p>
      </form>
    </div>
  );
}