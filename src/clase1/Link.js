
const Link = ({ to, openInNewTab, children }) => <a href={to} target={openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer">{children}</a>
export default Link;