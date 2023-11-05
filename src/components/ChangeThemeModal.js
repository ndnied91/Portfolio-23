import { Tooltip, Button } from '@material-tailwind/react';
import ThemeChanger from './ThemeChanger';

const ChangeThemeModal = () => {
  return (
    <section className="absolute md:right-5 right-2 top-auto lg:top-24 cursor-pointer bg-transparent shadow-none">
      <Tooltip content="Change Theme" placement="left">
        <div id="tooltip">
          <ThemeChanger className="bg-transparent" />
        </div>
      </Tooltip>
    </section>
  );
};

export default ChangeThemeModal;
