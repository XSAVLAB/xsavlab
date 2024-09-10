import { FC } from 'react';

interface ArrowLeftProps {
  color?: string;
  size?: string;
}

const FlashGrid: FC<ArrowLeftProps> = ({ color = 'currentcolor', size = '28px' }) => {
  return (
    <svg width={`calc(${size} * 10)`} height={size} fill={color} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 5.575c0 .428.166.824.464 1.121l3.948 3.991c.166.165.332.297.53.363.2.1.432.132.63.132.233 0 .432-.066.631-.132.2-.099.365-.198.53-.363l3.981-3.958c.166-.165.299-.33.365-.528.1-.198.133-.396.133-.626 0-.231-.066-.43-.133-.627a1.893 1.893 0 00-.365-.528L6.734.462A1.584 1.584 0 005.606 0a1.56 1.56 0 00-1.161.495L.465 4.453A1.566 1.566 0 000 5.575zM15.16 8.84l3.98 3.959c.166.164.299.33.365.527.1.198.133.429.133.627 0 .23-.067.429-.133.627-.1.198-.2.363-.365.527l-3.98 3.959c-.167.165-.332.297-.531.363a1.353 1.353 0 01-.63.132c-.233 0-.432-.066-.63-.132a1.895 1.895 0 01-.532-.363l-3.98-3.958c-.166-.165-.299-.33-.365-.528a1.423 1.423 0 01-.133-.627c0-.23.067-.429.133-.627.1-.198.199-.363.365-.527l3.98-3.959c.166-.165.332-.297.531-.363.2-.099.398-.132.63-.132.232 0 .432.066.63.132.2.1.365.198.531.363zm-8.426 8.378a1.897 1.897 0 00-.53-.362c-.2-.066-.399-.132-.631-.132-.232 0-.431.033-.63.132-.2.066-.365.198-.531.362l-3.98 3.959A1.84 1.84 0 000 22.33c0 .43.166.825.464 1.122l3.981 3.958c.166.165.332.264.53.363.2.066.399.132.631.132.232 0 .431-.033.63-.132.2-.066.365-.198.531-.363l3.98-3.958c.166-.165.266-.33.365-.528.067-.198.133-.396.133-.627 0-.198-.033-.428-.133-.626-.066-.198-.199-.363-.364-.528l-4.014-3.925zM118.778 6.674c1.213 0 2.04-.827 2.04-2.012 0-1.157-.827-1.984-2.04-1.984-1.212 0-2.067.827-2.067 1.984 0 1.185.855 2.012 2.067 2.012zm-1.157 15.847h2.315c.275 0 .441-.165.441-.44V8.878c0-.276-.166-.441-.441-.441h-2.315c-.276 0-.441.165-.441.441V22.08c0 .276.165.441.441.441zM36.029 8.411h2.591c.276 0 .441.165.441.44v1.957c0 .276-.165.441-.44.441h-2.592c-.082 0-.165.055-.165.165V22.08c0 .276-.165.441-.44.441h-2.316c-.275 0-.44-.165-.44-.44V11.414c0-.11-.056-.166-.166-.166H30.93c-.276 0-.441-.165-.441-.44V8.85c0-.275.165-.44.44-.44h1.572c.11 0 .165-.056.165-.166v-.468c0-3.5 1.213-4.575 5.044-4.548h.854c.276 0 .44.166.44.441V5.38c0 .275-.165.44-.44.44h-.606c-1.599 0-2.095.524-2.095 2.178v.248c0 .11.055.165.165.165zm8.516 14.11H42.23c-.275 0-.44-.165-.44-.44V3.67c0-.276.165-.442.44-.442h2.316c.275 0 .44.166.44.441v18.41c0 .276-.165.441-.44.441zm3.532-10.555c.33-2.178 2.59-3.748 5.76-3.748 3.555 0 5.843 1.984 5.843 4.685v9.177c0 .276-.166.441-.441.441h-2.315c-.276 0-.441-.165-.441-.44v-.69c0-.138-.083-.165-.193-.082-.965.937-2.315 1.433-3.969 1.433-2.563 0-4.657-1.268-4.657-4.162 0-2.839 2.067-4.547 5.732-4.547h2.922c.11 0 .165-.055.165-.166v-.634c0-1.405-.827-2.26-2.563-2.26-1.323 0-2.178.497-2.453 1.296-.083.275-.22.386-.496.358l-2.48-.303c-.276-.028-.441-.165-.414-.358zm2.784 6.394c0 1.212 1.02 1.846 2.342 1.846 1.736 0 3.28-1.02 3.28-2.535v-1.268c0-.11-.055-.165-.165-.165H54.03c-1.93 0-3.17.744-3.17 2.122zm17.265 4.327c3.39 0 5.65-1.544 5.65-4.19 0-2.756-2.563-3.61-4.85-4.271-.212-.06-.418-.117-.62-.172h-.001c-1.56-.426-2.77-.757-2.77-1.758 0-.992 1.02-1.515 2.425-1.515 1.654 0 2.619.771 2.619 1.68v.166c0 .11.165.165.44.165h2.123c.275 0 .44-.137.44-.33 0-2.453-2.232-4.19-5.621-4.19-3.253 0-5.485 1.6-5.485 4.217 0 2.701 2.453 3.583 4.658 4.245.36.12.713.224 1.047.322 1.352.398 2.398.706 2.398 1.634 0 .91-.992 1.599-2.48 1.599-1.6 0-2.674-.8-2.674-1.709v-.193c0-.11-.165-.193-.441-.193h-2.205c-.275 0-.44.166-.44.441v.138c0 2.232 2.26 3.914 5.787 3.914zM79.843 9.706c.799-1.02 1.929-1.488 3.39-1.488 2.976 0 4.933 1.874 4.933 4.933v8.93c0 .275-.165.44-.441.44H85.41c-.276 0-.441-.165-.441-.44v-8.269c0-1.68-1.047-2.838-2.646-2.838-1.57 0-2.646 1.13-2.646 2.81v8.296c0 .276-.165.441-.44.441H76.92c-.275 0-.44-.165-.44-.44V3.67c0-.276.165-.442.44-.442h2.315c.276 0 .441.166.441.441v5.953c0 .138.083.193.166.083zm20.255-.827v.496c0 .138-.083.193-.193.083-.772-.772-1.847-1.24-3.362-1.24-2.48 0-4.355 1.515-5.071 3.693-.359.992-.441 2.204-.441 3.5 0 1.185.082 2.342.358 3.335.827 2.673 3.197 3.693 5.347 3.693 1.488 0 2.48-.469 3.169-1.186.11-.11.193-.055.193.083v.166c0 3.004-1.792 3.803-5.347 3.5-.303-.028-.496.11-.496.385l-.083 2.04c0 .303.11.468.386.496 4.382.413 8.737-.717 8.737-6.339V8.88c0-.276-.166-.441-.441-.441h-2.315c-.276 0-.441.165-.441.441zm-.193 8.957c-.276 1.102-1.13 1.984-2.618 1.984-1.433 0-2.398-.882-2.756-2.012-.166-.413-.276-1.185-.276-2.397 0-1.158.11-1.902.33-2.426.387-1.13 1.269-2.011 2.674-2.011 1.433 0 2.343.854 2.618 2.011.166.552.221.938.221 2.398 0 1.488-.055 1.93-.193 2.453zm10.055-7.827c.716-1.075 1.763-1.736 3.197-1.736.661 0 1.102.137 1.46.303.221.11.303.303.248.551l-.441 2.287c-.055.304-.22.359-.523.276a3.253 3.253 0 00-1.406-.083c-1.488.083-2.701 1.103-2.701 2.784v7.69c0 .275-.165.44-.441.44h-2.315c-.275 0-.441-.165-.441-.44V8.878c0-.276.166-.441.441-.441h2.315c.276 0 .441.165.441.441v1.075c0 .138.083.193.166.055zm22.567-.496V3.67c0-.275.166-.44.441-.44h2.315c.276 0 .441.165.441.44v18.41c0 .276-.165.441-.441.441h-2.315c-.275 0-.441-.165-.441-.44v-.717c0-.138-.11-.193-.193-.055-.744.909-1.791 1.433-3.141 1.433-2.646 0-4.493-1.516-5.292-3.859-.331-1.02-.496-2.177-.496-3.445 0-1.24.138-2.37.469-3.362.799-2.37 2.59-3.858 5.319-3.858 1.35 0 2.37.496 3.141 1.35.083.11.193.083.193-.055zm-2.838 10.445c.964 0 1.653-.468 2.149-1.295.441-.744.634-1.874.634-3.197 0-1.406-.22-2.508-.689-3.28-.468-.771-1.157-1.213-2.067-1.213-.964 0-1.708.414-2.205 1.158-.523.8-.799 1.93-.799 3.362 0 1.296.221 2.37.662 3.142.468.855 1.267 1.323 2.315 1.323z" />
    </svg>

  );
}

export default FlashGrid;