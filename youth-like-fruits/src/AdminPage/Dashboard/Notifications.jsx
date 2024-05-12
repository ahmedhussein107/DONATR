import { useState } from 'react';
import PropTypes from 'prop-types';
import { set, sub } from 'date-fns';
import { faker } from '@faker-js/faker';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import { fToNow } from '../../assets/format_time';
import Iconify from '../../assets/Iconify';
import Scrollbar from '../../assets/scrollbar';
import notificationPic from '../.././assets/icons/ic_notification_package.svg';
import shippingPic from '../.././assets/icons/ic_notification_shipping.svg';
import notification_mail from '../.././assets/icons/ic_notification_mail.svg';
import notification_chat from '../.././assets/icons/ic_notification_chat.svg';
import avatar_11 from '../.././assets/avatar_11.jpg';

const NOTIFICATIONS = [
  {
    id: faker.string.uuid(),
    title: 'Delivery processing',
    description: 'order has Arrived',
    avatar: null,
    type: 'order_placed',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: 'You have new message',
    description: '5 unread messages',
    avatar: null,
    type: 'chat_message',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: faker.string.uuid(),
    title: 'You have new mail',
    description: 'sent from masr Elkheir',
    avatar: null,
    type: 'mail',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
  {
    id: faker.string.uuid(),
    title: 'Delivery processing',
    description: 'order will be arrived in 2 days',
    avatar: null,
    type: 'order_shipped',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  },
];

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen}>
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify width={24} icon="solar:bell-bing-bold-duotone" style={{ color: 'white' }} />
        </Badge>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
            bgcolor: '#D5E0E1',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ color: 'black', fontWeight: 'bold' }}>
              Notifications
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title="Mark all as read" style={{ Color: '#0000FF' }}>
              <IconButton color="#0000FF" onClick={handleMarkAllAsRead}>
                <Iconify icon="eva:done-all-fill" color="#00C0FF" /> { }
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Scrollbar sx={{ height: { xs: 500, sm: 500 } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                New
              </ListSubheader>
            }
          >
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                Before that
              </ListSubheader>
            }
          >
            {notifications.slice(2, 5).map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Scrollbar>

        <Divider sx={{ borderStyle: 'dashed' }} />

      </Popover>
    </>
  );
}

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.string,
    isUnRead: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    avatar: PropTypes.any,
  }),
};

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.isUnRead && {
          bgcolor: 'action.selected',
        }),
        pointerEvents: 'none', // Disable pointer events
        cursor: 'default', // Change cursor style
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled',
            }}
            color="text.primary" // Add this line
          >
            <Iconify icon="eva:clock-outline" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {fToNow(notification.createdAt)}
          </Typography>
        }
        color="text.primary" // Add this line
      />
    </ListItemButton>
  );
}

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2" color="text.primary"> {/* Add color prop here */}
      {notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {notification.description}
      </Typography>
    </Typography>
  );

  if (notification.type === 'order_placed') {
    return {
      avatar: <img alt={notification.title} src={notificationPic} />,
      title,
    };
  }
  if (notification.type === 'order_shipped') {
    return {
      avatar: <img alt={notification.title} src={shippingPic} />,
      title,
    };
  }
  if (notification.type === 'mail') {
    return {
      avatar: <img alt={notification.title} src={notification_mail} />,
      title,
    };
  }
  if (notification.type === 'chat_message') {
    return {
      avatar: <img alt={notification.title} src={notification_chat} />,
      title,
    };
  }
  return {
    avatar: true ? <img alt={notification.title} src={avatar_11} /> : null,
    title,
  };
}