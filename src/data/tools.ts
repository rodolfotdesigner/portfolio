import htmlIcon from '../assets/about/icons/html.svg'
import css3Icon from '../assets/about/icons/css3.svg'
import sassIcon from '../assets/about/icons/sass.svg'
import javascriptIcon from '../assets/about/icons/javascript.svg'
import nodejsIcon from '../assets/about/icons/nodejs.svg'
import reactIcon from '../assets/about/icons/react.svg'
import reduxIcon from '../assets/about/icons/redux.svg'
import githubIcon from '../assets/about/icons/github.svg'
import vscodeIcon from '../assets/about/icons/vscode.svg'
import claudeCodeIcon from '../assets/about/icons/claude-code.svg'
import codexIcon from '../assets/about/icons/codex.svg'
import figmaIcon from '../assets/about/icons/figma.svg'
import photoshopIcon from '../assets/about/icons/photoshop.svg'
import illustratorIcon from '../assets/about/icons/illustrator.svg'
import afterEffectsIcon from '../assets/about/icons/after-effects.svg'

export type Tool = {
  id: string
  icon: string
  labelKey: string
}

export const tools: readonly Tool[] = [
  { id: 'html', icon: htmlIcon, labelKey: 'about.tools.items.html' },
  { id: 'css3', icon: css3Icon, labelKey: 'about.tools.items.css3' },
  { id: 'sass', icon: sassIcon, labelKey: 'about.tools.items.sass' },
  { id: 'javascript', icon: javascriptIcon, labelKey: 'about.tools.items.javascript' },
  { id: 'nodejs', icon: nodejsIcon, labelKey: 'about.tools.items.nodejs' },
  { id: 'react', icon: reactIcon, labelKey: 'about.tools.items.react' },
  { id: 'redux', icon: reduxIcon, labelKey: 'about.tools.items.redux' },
  { id: 'github', icon: githubIcon, labelKey: 'about.tools.items.github' },
  { id: 'vscode', icon: vscodeIcon, labelKey: 'about.tools.items.vscode' },
  { id: 'claude', icon: claudeCodeIcon, labelKey: 'about.tools.items.claude' },
  { id: 'codex', icon: codexIcon, labelKey: 'about.tools.items.codex' },
  { id: 'figma', icon: figmaIcon, labelKey: 'about.tools.items.figma' },
  { id: 'photoshop', icon: photoshopIcon, labelKey: 'about.tools.items.photoshop' },
  { id: 'illustrator', icon: illustratorIcon, labelKey: 'about.tools.items.illustrator' },
  { id: 'after-effects', icon: afterEffectsIcon, labelKey: 'about.tools.items.afterEffects' },
]
