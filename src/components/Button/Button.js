import styles from './Button.module.scss'

// const Button = ({text}) => {
//     return <button className={styles.button}>{text}</button>
// }

const Button = props => {
    return <button className={styles.button}>{props.children}</button>
}

export default Button;