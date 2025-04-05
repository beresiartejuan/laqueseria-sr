
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import { Button } from '../components/ui/button';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { validateEmail, validatePassword } from '../utils/validation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let isValid = true;
    
    if (!validateEmail(email)) {
      setEmailError('Por favor, introduce un email válido');
      isValid = false;
    }
    
    if (!validatePassword(password)) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      isValid = false;
    }
    
    if (isValid) {
      // Here we would normally handle the login logic
      // but as per requirements, we're just providing the UI structure
      console.log('Login attempt with:', { email, password });
    }
  };
  
  return (
    <div className="min-h-screen bg-cheese-black flex flex-col">
      <div className="p-6 absolute top-0 left-0">
        <Link to="/" className="text-cheese-white hover:text-cheese-gold flex items-center gap-2 transition-colors">
          <ChevronLeft size={20} />
          <span>Volver</span>
        </Link>
      </div>
      
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <h1 className="font-serif text-2xl">Acceso Administración</h1>
            <p className="text-cheese-white opacity-70 mt-2">
              Ingresa tus credenciales para acceder al panel
            </p>
          </div>
          
          <div className="bg-cheese-darkGray rounded-lg p-8 border border-cheese-lightGray">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="login-email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="login-email"
                  className={`input-field ${emailError ? 'border-red-500' : ''}`}
                  placeholder="tu@email.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="mt-1 text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="login-password" className="block mb-2 text-sm font-medium">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="login-password"
                    className={`input-field pr-10 ${passwordError ? 'border-red-500' : ''}`}
                    placeholder="••••••••"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cheese-white opacity-70 hover:opacity-100"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {passwordError && (
                  <p className="mt-1 text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-cheese-lightGray text-cheese-gold focus:ring-cheese-gold"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">
                    Recordarme
                  </label>
                </div>
                <div>
                  <a href="#" className="text-sm text-cheese-gold hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Iniciar Sesión
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-cheese-white opacity-70 text-sm">
              ¿Necesitas ayuda? Contacta con el administrador del sistema
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-4 text-center text-sm text-cheese-white opacity-50">
        <p>© {new Date().getFullYear()} Queso Moderno. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Login;
