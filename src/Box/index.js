import React from 'react';
import { any, bool, func, number, object, string } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';
// const styles = {};

/**
 * This components wraps a `div` element and add support
 * for inline flexbox capabilities, the idea behind this is
 * to create the main layout elements even before the
 * css files are downloaded.
 * ```
    <Box grid row>
      <Box>
        <p>Menu</p>
      </Box>
      <Box flex={1}>
        <p>Content</p>
      </Box>
    </Box>
 * ```
 *
 * @param {Object} props 
 */
export default function Box(props) {
  const {
    alignItems,
    bubble,
    center,
    children,
    classes,
    column,
    flex,
    fullHeight,
    fullWidth,
    grid,
    justifyContent,
    onPress,
    overflow,
    row,
    stretch,
    style,
  } = props;

  if (row && column) {
    console.warn('"row" and "column" should not be set at the same time');
  }

  const cls = classNames(styles.base, {
    [styles.grid]: grid,
    [styles.bubble]: bubble,
    [styles.center]: center,
    [styles.fullHeight]: fullHeight,
    [styles.fullWidth]: fullWidth,
    [styles.gridRow]: row && !column,
    [styles.gridColum]: !row && column,
    [styles.overflow]: overflow,
    [styles.stretch]: stretch,
  }, classes.root);

  const inline = {
    flexGrow: flex,
    flexShrink: flex,
    alignItems,
    justifyContent,
    ...style,
  };

  return (
    <div style={inline} className={cls} onClick={onPress}>
      {children}
    </div>
  );
}

Box.propTypes = {
  alignItems: string,
  bubble: bool,
  center: bool,
  children: any,
  classes: object,
  column: bool,
  flex: number,
  fullHeight: bool,
  fullWidth: bool,
  grid: bool,
  justifyContent: string,
  onPress: func,
  overflow: bool,
  row: bool,
  stretch: bool,
  style: object,
};
