'use client';

import React from 'react';
import LoginForm from './components/LoginForm';
import './login.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">Sistema de Gestión de Recursos</h1>
        </div>

        <LoginForm />

        <div className="login-footer">
          <p className="copyright">
            © 2025 Dirección Nacional Guardia Republicana
          </p>
        </div>
      </div>
    </div>
  );
}
