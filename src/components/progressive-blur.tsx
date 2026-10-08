/** Four graduated masks keep the blur confined to the viewport's lower edge. */
export function ProgressiveBlur() {
  return (
    <div className="viewport-blur" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}
