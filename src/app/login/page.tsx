'use client';

import React from 'react';
import LoginForm from './components/LoginForm';
import './login.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="institutional-logo">
            <img
              src="/images/escudo-policial.png"
              alt="Escudo Institucional"
              className="logo-image"
              // Imagen fallback en caso de que no exista el escudo
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24'%3E%3Cpath fill='%23003366' d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'/%3E%3C/svg%3E";
              }}
            />
          </div>
          <h1 className="login-title">Sistema de Gestión de Recursos</h1>
          <p className="login-subtitle">Dirección Nacional de Gestión de Recursos</p>
        </div>

        <LoginForm />

        <div className="login-footer">
          <p className="institutional-text">Acceso restringido a personal autorizado</p>
          <p className="copyright">
            © 2025 Ministerio del Interior - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
