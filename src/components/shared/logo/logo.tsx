import { memo } from 'react';
import styles from './logo.module.scss';

export interface LogoProps {
    className?: string;
}

export const Logo = memo<LogoProps>(function Logo({ className }) {
    return (
        <svg className={`${styles.root} ${className || ''}`} width="51" height="24" viewBox="0 0 51 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4611 7.83905C21.4958 7.6266 21.5148 7.41248 21.5148 7.19837C21.5148 4.79885 21.0943 0 14.3406 0C8.55015 0 7.40543 4.31919 7.40543 6.71836C7.40543 9.11788 9.55767 11.9971 9.55767 11.9971C9.55767 11.9971 7.64449 12.9569 5.4923 12.9569C3.3401 12.9569 2.75313 11.9971 1.25296 11.7573C-0.247208 11.5174 -0.725493 18.9556 1.66596 21.5948C4.05743 24.2342 7.16624 23.9943 11.9491 23.9943C16.7319 23.9943 23.9062 23.9943 23.9062 19.1955C23.9062 14.3968 19.1234 11.9972 19.1234 11.9972C19.1234 11.9972 19.6 11.5191 20.1275 10.7764H20.362C22.4942 10.7764 25.6283 8.13262 22.9952 8.13262C22.4495 8.13262 21.9345 8.01912 21.4611 7.83898L21.4611 7.83905ZM16.9924 7.20004C17.6525 7.20004 18.1877 6.66282 18.1877 6.00003C18.1877 5.33723 17.6525 4.80001 16.9924 4.80001C16.3323 4.80001 15.7971 5.33723 15.7971 6.00003C15.7971 6.66282 16.3323 7.20004 16.9924 7.20004Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.5389 7.83905C29.5042 7.6266 29.4852 7.41248 29.4852 7.19837C29.4852 4.79885 29.9057 0 36.6594 0C42.4499 0 43.5946 4.31919 43.5946 6.71836C43.5946 9.11788 41.4423 11.9971 41.4423 11.9971C41.4423 11.9971 43.3555 12.9569 45.5077 12.9569C47.6599 12.9569 48.2469 11.9971 49.747 11.7573C51.2472 11.5174 51.7255 18.9556 49.334 21.5948C46.9426 24.2342 43.8338 23.9943 39.0509 23.9943C34.2681 23.9943 27.0938 23.9943 27.0938 19.1955C27.0938 14.3968 31.8766 11.9972 31.8766 11.9972C31.8766 11.9972 31.4 11.5191 30.8725 10.7764H30.638C28.5058 10.7764 25.3717 8.13262 28.0048 8.13262C28.5505 8.13262 29.0655 8.01912 29.5389 7.83898L29.5389 7.83905ZM34.0076 7.20004C33.3475 7.20004 32.8123 6.66282 32.8123 6.00003C32.8123 5.33723 33.3475 4.80001 34.0076 4.80001C34.6677 4.80001 35.2029 5.33723 35.2029 6.00003C35.2029 6.66282 34.6677 7.20004 34.0076 7.20004Z"
                fill="white"
            />
        </svg>
    );
});