import { Component } from 'src/core/shopware';
import 'src/app/component/media/sw-media-grid-item';
import template from './sw-media-grid-catalog-item.html.twig';
import './sw-media-grid-catalog-item.less';

Component.extend('sw-media-grid-catalog-item', 'sw-media-grid-item', {
    template,

    props: {
        item: {
            required: true,
            type: Object,
            validator(value) {
                return value.type !== undefined && value.type === 'catalog';
            }
        }
    },

    computed: {
        gridItemListeners() {
            return {
                click: this.viewCatalogContent
            };
        }
    },

    methods: {
        viewCatalogContent() {
            this.$router.push({
                name: 'sw.media.catalog-content',
                params: { id: this.item.id }
            });
        }
    }
});
