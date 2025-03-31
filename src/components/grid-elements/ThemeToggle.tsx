import { useThemeEffect } from '../../hooks/useThemeEffect';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { handleThemeToggle } = useThemeEffect();

  return (
    <div className={`grid-block theme-toggle-container ${className || ''}`}>
      <div className='theme-toggle' onClick={handleThemeToggle}>
        <div className='thumb'></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
