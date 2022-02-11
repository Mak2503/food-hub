const close = ({ className, h = 32 }) => {
  console.log(className);
  return (
    <div className={className}>
      <svg width={`${h}px`} height={`${h}px`} viewBox="0 0 72 72" id="emoji">
        <g id="line">
          <line
            x1="17.5"
            x2="54.5"
            y1="17.5"
            y2="54.5"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="54.5"
            x2="17.5"
            y1="17.5"
            y2="54.5"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
};

// const CheckIcon = ({ className, h = 24, isOk = true }) => {
//   // darker green #267232
//   const bg = isOk ? '#4CAF50' : '#ECF0F1'
//   const tick = '#ffff'
//   return (
//     <svg width={`${h}px`} height={`${h}px`} viewBox="0 0 16 16">
//       <g>
//         <path
//           fill={bg}
//           d="M12 14H4c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2zm0 0"
//         ></path>
//         <path
//           fill={tick}
//           d="M11.527 4.863L7.004 9.391 5.137 7.527l-.942.946 2.813 2.804 5.465-5.472zm0 0"
//         ></path>
//       </g>
//     </svg>
//   )
// }

export { close as CloseIcon };
