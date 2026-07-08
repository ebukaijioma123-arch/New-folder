// react-icons groups icons into different "sets" (fa = Font Awesome, si = Simple Icons).
// We import specific icons we need by name from each set.
import {
  FaReact, FaHtml5, FaCss3Alt, FaUsers, FaPenNib,
  FaBullhorn, FaCode, FaChartLine, FaFileAlt,
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

// This object is a "lookup table" — given a string key (matching the
// 'icon' field in our SKILLS/SERVICES data), it returns the matching
// icon COMPONENT (not yet rendered, just the reference to use later).
export const ICON_MAP = {
  react: FaReact,
  js: SiJavascript,
  html: FaHtml5,
  css: FaCss3Alt,
  community: FaUsers,
  content: FaPenNib,
  writing: FaFileAlt,
  social: FaBullhorn,
  code: FaCode,
  strategy: FaChartLine,
  docs: FaFileAlt,
};