import React from 'react';
import Moment from 'react-moment';

export default function Date({ date }) {
  return <Moment date={date} format='DD/MM/YYYY' />;
}
