import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const validate = () => {
    const newErrors = {};

    // 1. Kiểm tra không nhập
    if (!formData.username.trim()) {
      newErrors.username = 'Username không được để trống';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      // 2. Kiểm tra email đúng định dạng
      newErrors.email = 'Email không đúng định dạng';
    }

    if (!formData.password) {
      newErrors.password = 'Password không được để trống';
    } else {
      // 3. Password từ 6 kí tự trở lên, có hoa/thường/số/kí tự đặc biệt
      if (formData.password.length < 6) {
        newErrors.password = 'Password phải có ít nhất 6 kí tự';
      } else if (!/(?=.*[a-z])/.test(formData.password)) {
        newErrors.password = 'Password phải chứa ít nhất 1 chữ thường';
      } else if (!/(?=.*[A-Z])/.test(formData.password)) {
        newErrors.password = 'Password phải chứa ít nhất 1 chữ hoa';
      } else if (!/(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'Password phải chứa ít nhất 1 chữ số';
      } else if (!/(?=.*[!@#$%^&*(),.?":{}|<>])/.test(formData.password)) {
        newErrors.password = 'Password phải chứa ít nhất 1 kí tự đặc biệt';
      }
    }

    // 4. Confirm password khớp
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Xác nhận password không được để trống';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Password xác nhận không khớp';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Xóa lỗi khi người dùng bắt đầu nhập lại
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    const isValid = validate();
    setValidated(true);

    if (isValid) {
      console.log('Thông tin đăng ký hợp lệ:', formData);
      // Chuyển hướng đến trang blog home sau khi đăng ký thành công
      navigate('/');
    }
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setValidated(false);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Đăng Ký Tài Khoản</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
            placeholder="Nhập username"
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            placeholder="Nhập email"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
            placeholder="Nhập password"
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            isInvalid={!!errors.confirmPassword}
            placeholder="Xác nhận password"
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="primary" type="submit" className="w-100 me-2">
            Register
          </Button>
          <Button variant="secondary" type="button" onClick={handleCancel} className="w-100 ms-2">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
