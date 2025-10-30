import { useState } from 'react';

export function useMobileMenuNavigation(menuData) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState([]);
    const [currentMenu, setCurrentMenu] = useState(null);

    const handleMenuClick = (menu) => {
        if (menu.items || menu.subSubMenu) {
            setBreadcrumb([...breadcrumb, menu.label]);
            setCurrentMenu(menu.items || menu.subSubMenu);
        }
    };

    const handleBackClick = () => {
        const newBreadcrumb = [...breadcrumb];
        newBreadcrumb.pop();
        setBreadcrumb(newBreadcrumb);

        if (newBreadcrumb.length === 0) {
            setCurrentMenu(null);
        } else {
            // Navegar de vuelta al menú anterior
            let menu = menuData;
            for (let i = 0; i < newBreadcrumb.length; i++) {
                const found = menu.find(m => m.label === newBreadcrumb[i]);
                if (found) {
                    menu = found.items || found.subSubMenu;
                }
            }
            setCurrentMenu(menu);
        }
    };

    const resetMenu = () => {
        setBreadcrumb([]);
        setCurrentMenu(null);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) resetMenu();
    };

    const displayMenu = currentMenu || menuData;

    return {
        isMenuOpen,
        breadcrumb,
        displayMenu,
        handleMenuClick,
        handleBackClick,
        resetMenu,
        toggleMenu
    };
}
