function Button({ id, title, leftIcon, containerClass }) {
  return (
    <button
      className={`${containerClass} px-5 py-2 font-general uppercase text-[12px] rounded-full flex gap-2 items-center justify-center cursor-pointer`}
    >
      <span className="text-lg">{leftIcon}</span>
      {title}
    </button>
  );
}

export default Button;
 