export const Hamburger = (props: any) => (
  <div ref={props.refer} {...props} id="hamburger">
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.84" y="0.84" width="54.32" height="54.32" rx="27.16" stroke="#C83540" stroke-width="1.68" />
      <rect x="14.502" y="37.5" width="27" height="1" rx="0.5" fill="#C83540" stroke="#C83540" />
      <mask id="path-3-inside-1_332_65" fill="white">
        <path d="M14 28C14 27.4477 14.4477 27 15 27H41C41.5523 27 42 27.4477 42 28C42 28.5523 41.5523 29 41 29H15C14.4477 29 14 28.5523 14 28Z" />
      </mask>
      <path
        d="M14 28C14 27.4477 14.4477 27 15 27H41C41.5523 27 42 27.4477 42 28C42 28.5523 41.5523 29 41 29H15C14.4477 29 14 28.5523 14 28Z"
        fill="#C83540"
      />
      <path
        d="M15 29.125H41V24.875H15V29.125ZM41 26.875H15V31.125H41V26.875ZM15 26.875C15.6213 26.875 16.125 27.3787 16.125 28H11.875C11.875 29.7259 13.2741 31.125 15 31.125V26.875ZM39.875 28C39.875 27.3787 40.3787 26.875 41 26.875V31.125C42.7259 31.125 44.125 29.7259 44.125 28H39.875ZM41 29.125C40.3787 29.125 39.875 28.6213 39.875 28H44.125C44.125 26.2741 42.7259 24.875 41 24.875V29.125ZM15 24.875C13.2741 24.875 11.875 26.2741 11.875 28H16.125C16.125 28.6213 15.6213 29.125 15 29.125V24.875Z"
        fill="#C83540"
        mask="url(#path-3-inside-1_332_65)"
      />
      <rect x="14.5" y="17.5" width="27" height="1" rx="0.5" fill="#C83540" stroke="#C83540" />
    </svg>
  </div>
);