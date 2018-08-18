/**
 * Add a class to an element
 *
 * @param {object} el
 * @param {string} classname
 *
 * @returns {null}
 */
export function addClass(el, classname) {
  if (classname) {
    if (el.classList) {
      classname.split(' ').forEach(function _addCls(c) {
        el.classList.add(c);
      });
    } else {
      el.className += ' ' + classname;
    }
  }
}

/**
 * Check if element has a class
 *
 * @param {object} el
 * @param {string} classname
 *
 * @returns {boolean}
 */
export function hasClass(el, classname) {
  var response = false;

  if (classname) {
    if (el.classList) {
      response = el.classList.contains(classname);
    } else {
      response = el.className && new RegExp('(\\s|^)' + classname + '(\\s|$)').test(el.className);
    }
  }

  return response;
}

/**
 * Remove a class from an element
 *
 * @param {object} el
 * @param {string} classname
 *
 * @returns {null}
 */
export function removeClass(el, classname) {
  if (classname) {
    if (el.classList) {
      classname.split(' ').forEach(function _removeCls(c) {
        el.classList.remove(c);
      });
    } else {
      el.className = el.className.replace(new RegExp('(^|\b)' + classname.split(' ').join('|') + '(\b|$)', 'gi'), ' ');
    }
  }
}
