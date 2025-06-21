import css from './LoadMoreBtn.module.css';

type Props = {
    onClick: () => void;
};

export default function LoadMoreBtn({onClick}: Props) { 
    return (
        <>
            <button className={css.load} onClick={onClick}>Load more</button>
        </>
    );
}
    