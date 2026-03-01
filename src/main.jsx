import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  componentDidCatch(error) {
    console.error('React render error:', error);
  }
  render() {
    if (this.state.error) {
      return (
        <div dir="rtl" style={{ padding: 24, fontFamily: 'sans-serif', background: '#fff3cd', color: '#856404', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ marginBottom: 16 }}>خطأ في التطبيق</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: 14 }}>{this.state.error.message}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: 12, marginTop: 16, opacity: 0.8 }}>{this.state.error.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

try {
  const rootEl = document.getElementById('root');
  if (!rootEl) throw new Error('Root element #root not found');
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>,
  );
} catch (e) {
  const el = document.getElementById('root');
  if (el) el.innerHTML = `<div dir="rtl" style="padding:24px;font-family:sans-serif;background:#f8d7da;color:#721c24;"><h2>خطأ عند التحميل</h2><pre>${(e?.message || e).replace(/</g, '&lt;')}</pre></div>`;
}
