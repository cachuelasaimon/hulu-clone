function HeaderItem(props) {
  const { title, Icon } = props;

  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-7 mb-1 mt-5 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100 ">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
