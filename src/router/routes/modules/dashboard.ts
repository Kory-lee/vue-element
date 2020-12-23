import { useI18n } from '/@/plugins/i18n';
import { LAYOUT } from '/@/router/constant';

const { t } = useI18n();
const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/workbench',
  meta: { icon: 'bx:bx-home', title: t('routes.dashboard.dashboard') },
  children: [
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: { title: t('routes.dashboard.workbench'), affix: true },
    },
    {
      path: 'analysis',
      name: 'Analysis',
      components: () => {},
      meta: { title: t('routes.dashboard.analysis') },
    },
  ],
};

export default dashboard;
