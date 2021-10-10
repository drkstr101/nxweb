/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Divider,
  Button
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  navLink: {
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  listItemIcon: {
    minWidth: "auto"
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer"
  },
  menu: {
    display: "flex"
  },
  menuItem: {
    marginRight: theme.spacing(8),
    "&:last-child": {
      marginRight: 0
    }
  },
  menuGroupItem: {
    paddingTop: 0
  },
  menuGroupTitle: {
    textTransform: "uppercase"
  },
  divider: {
    width: "100%"
  }
}))

interface Props {
  className?: string
  onClose: Function
  pages: PagesProps
}

const SidebarNav = ({ pages, onClose, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles()

  const landings = pages.landings
  const supportedPages = pages.pages
  const account = pages.account

  const MenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
    <List disablePadding>
      <ListItem disableGutters>
        <Typography variant="body2" color="primary" className={classes.menuGroupTitle}>
          {item.groupTitle}
        </Typography>
      </ListItem>
      {item.pages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Typography
            variant="body2"
            component={"a"}
            href={page.href}
            className={clsx(classes.navLink, "submenu-item")}
            color="textPrimary"
            onClick={() => onClose()}
          >
            {page.title}
          </Typography>
        </ListItem>
      ))}
    </List>
  )

  const LandingPages = (): JSX.Element => {
    const { services, apps, web } = landings.children
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={web} />
        </div>
      </div>
    )
  }

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Sitemap
        </Typography>
        <LandingPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href="/contact/request"
        >
          Free Consultation
        </Button>
      </ListItem>
    </List>
  )
}

export default SidebarNav
