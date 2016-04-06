'use strict';

System.register(['aurelia-framework', 'ace'], function (_export, _context) {
    var inject, bindable, noView, customElement, processContent, ace, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, AceEditor;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
            noView = _aureliaFramework.noView;
            customElement = _aureliaFramework.customElement;
            processContent = _aureliaFramework.processContent;
        }, function (_ace) {
            ace = _ace.default;
        }],
        execute: function () {
            _export('AceEditor', AceEditor = (_dec = customElement('ace'), _dec2 = processContent(false), _dec3 = inject(DOM.Element), noView(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
                function AceEditor(element) {
                    _classCallCheck(this, AceEditor);

                    _initDefineProp(this, 'content', _descriptor, this);

                    this.id = Math.floor((1 + Math.random()) * 0x10000);

                    this.element = element;
                    this.ace = ace;
                }

                AceEditor.prototype.attached = function attached() {
                    this.element.setAttribute('id', this.id);
                };

                return AceEditor;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'content', [bindable], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class) || _class) || _class) || _class));

            _export('AceEditor', AceEditor);
        }
    };
});