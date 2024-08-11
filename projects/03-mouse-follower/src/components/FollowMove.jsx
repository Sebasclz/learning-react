export function FollowMove ({ position, enabled, handleClick}) {
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={handleClick}>
        {enabled ? 'Desactivar' : 'Activar'} seguir mouse
      </button>
    </>
  );
}