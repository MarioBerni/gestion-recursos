'use client';

import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { UserIcon, PasswordIcon, LoginIcon } from '../../components/icons';
import LogoSVG from '../../components/icons/logo-gr.svg';

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
    <Card variant="institutional" className="login-card">
      <div className="logo-watermark">
        <img 
          src={LogoSVG.src} 
          alt="Logo Gestión de Recursos" 
          className="watermark-image" 
        />
      </div>
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
            leftIcon={<UserIcon size={18} />}
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
            leftIcon={<PasswordIcon size={18} />}
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
              <LoginIcon size={18} className="login-button-icon" />
              <span className="login-button-text">Iniciar Sesión</span>
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
