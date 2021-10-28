import React from 'react';
import {
  createStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() =>
  createStyles({
    closeButton: {
      position: 'absolute',
      right: 8,
      top: 8,
    },
    titleDialog: {
      fontSize: 30,
    },
  })
);

export default function CustomDialog({ children, index, onClose, open, title }) {
  const classes = useStyles();
  return (
    <Dialog fullWidth maxWidth='md' onClose={onClose} open={open === index}>
      <DialogTitle onClose={onClose} align='center'>
        <Typography className={classes.titleDialog}>{title}</Typography>
        {onClose && (
          <IconButton
            aria-label='close'
            onClick={onClose}
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
