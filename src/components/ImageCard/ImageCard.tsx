import type { PhotoCollection } from '../../types';
import css from './ImageCard.module.css';

type ImageCardProps = {
    item: PhotoCollection;
    onClick: () => void;
  };

export default function ImageCard({ item, onClick }: ImageCardProps) { 
    return (
        <div className={css.card} onClick={onClick} style={{ cursor: 'pointer' }}>
            <div>
                <img 
                    src={item.urls.small} 
                    alt={item.alt_description}
                />
            </div>
        </div>
    );
}