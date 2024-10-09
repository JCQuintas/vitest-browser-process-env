
function UseDerivedEnv() {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'production') {
    throw new Error('This is a production error');
  }

  return (
    <div data-testid="test">Rendered</div>
  );
}

export default UseDerivedEnv;
