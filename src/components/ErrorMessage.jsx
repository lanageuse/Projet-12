function ErrorMessage({ error }) {
  if (!error) return null;
  return (
    <div className="error-container">
      <p>Une erreur est survenue :</p>
      <pre>{error}</pre>
    </div>
  );
}

export default ErrorMessage;
