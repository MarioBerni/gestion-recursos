'use client';

import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { username?: string; password?: string } = {};
    let isValid = true;

    if (!formData.username.trim()) {
      newErrors.username = 'El nombre de usuario es obligatorio';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulación de autenticación - reemplazar con llamada real cuando haya backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // En un entorno real, aquí iría la lógica para redireccionar al dashboard
      console.log('Inicio de sesión exitoso', formData);

      // Simular redirección
      window.location.href = '/dashboard'; // En producción usaríamos Router de Next.js
    } catch (error) {
      console.error('Error de autenticación:', error);
      // Manejar errores de autenticación
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card variant="institutional" className="login-card" title="Acceso al Sistema">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-controls">
          <Input
            label="Nombre de usuario"
            name="username"
            type="text"
            placeholder="Ingrese su nombre de usuario"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
            isOfficial
            // Icono SVG inline para el usuario
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            }
          />

          <Input
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            isOfficial
            // Icono SVG inline para la contraseña
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
            }
          />

          <div className="remember-me-row">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Recordarme en este dispositivo
            </label>

            <a href="#" className="forgot-password">
              Olvidé mi contraseña
            </a>
          </div>

          <div className="login-button-container">
            <Button type="submit" variant="primary" fullWidth size="lg" isLoading={isLoading}>
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
