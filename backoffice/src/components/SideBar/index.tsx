import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Regras from '../../assets/rule.svg'
import Orçamento from '../../assets/orçamento.svg'
import Cliente from '../../assets/cliente.svg'
import Serviços from '../../assets/serviços.svg'
import Logo from '../../assets/logo.svg'
import LogoOpen from '../../assets/LogoOpen.svg'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';

const drawerWidth = 240;


const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  '&.Mui-focused, &.Mui-selected, &:hover': {
    background: 'grey',
    borderRadius: '30px'
  },
}));




const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Update DrawerProps interface to include onMouseOver prop
interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, onMouseOver }: DrawerProps) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        background: '#364D7F', 
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        background: '#364D7F', 
      },
    }),
    display: open || onMouseOver ? 'block' : 'none',
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isSidebarHovered, setSidebarHovered] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSidebarMouseEnter = () => {
    setSidebarHovered(true);
  };

  const handleSidebarMouseLeave = () => {
    setSidebarHovered(false);
  };

  const menuItems1 = ['Regras', 'Meus Orçamentos'];
  const menuItems2 = ['Cliente', 'Serviços'];
  const menuItems3 = ['Sair'];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} />
     <div onMouseEnter={handleSidebarMouseEnter} onMouseLeave={handleSidebarMouseLeave}>
        <Drawer variant="permanent" open={open} onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          <DrawerHeader>
          <img src={isSidebarHovered ? LogoOpen : Logo} alt="Logo" />
          </DrawerHeader>
          <Divider sx={{ background: 'white', width: '80%', margin: '0 auto' }} />
          <List>
            {menuItems1.map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <StyledListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? (
                      <img src={Regras} alt="Regras Icon" width={24} height={24} />
                    ) : (
                      <img src={Orçamento} alt="Orçamento Icon" width={24} height={24} />
                    )}
                  </StyledListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ background: 'white', width: '80%', margin: '0 auto' }} />
          <List>
            {menuItems2.map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <StyledListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? (
                      <img src={Cliente} alt="Cliente Icon" width={24} height={24} />
                    ) : (
                      <img src={Serviços} alt="Serviços Icon" width={24} height={24} />
                    )}
                  </StyledListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ background: 'white', width: '80%', margin: '0 auto' }} />
          <List>
            {menuItems3.map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <StyledListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <ExitToAppIcon />
                  </StyledListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );

}

