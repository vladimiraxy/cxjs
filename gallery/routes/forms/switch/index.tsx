import {cx, Button, Section, FlexRow, Route, RedirectRoute, PureContainer} from 'cx/widgets';
import {bind, expr, FirstVisibleChildLayout} from 'cx/ui';

import {getHeader} from "../../../components/getHeader";
import {SandboxedRoute, SandboxedAsyncRoute} from "../../../components/asyncRoute";

const header = getHeader({
    title: "Switch",
    tabs: {
        states: 'States',
        baseline: "Baseline"
    },
    docsUrl: 'https://cxjs.io/docs/widgets/switches'
});

import Default from './states';

export default <cx>
    {header}
    <PureContainer layout={FirstVisibleChildLayout}>
        <SandboxedRoute route="+/states">
            {Default}
        </SandboxedRoute>
        <SandboxedAsyncRoute route="+/baseline" content={()=>import("../../../examples/baseline")} />
        <RedirectRoute redirect="+/states" />
    </PureContainer>
</cx>

import {hmr} from '../../hmr.js';
hmr(module);