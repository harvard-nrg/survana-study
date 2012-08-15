define(
    [
    ],
function($,$m)
{
    var callbacks={};

    function register(id,callback)
    {
        callbacks[id]=callback;
    }

    function check(id,context,changed)
    {
        if (typeof(callbacks[id])!=='function')
            return null;

        //call the callback
        return callbacks[id].apply(this,[context,changed]);
    }

    function has(haystack,needle)
    {
        if ((typeof(haystack)==='undefined') ||
            (typeof(needle))==='undefined')
            return false;

        //convert numbers to string
        needle=String(needle);

        for (var i in haystack)
        {
            if (typeof(i)==='number')
                haystack[i]=String(typeof(haystack[i]));
        }

        var result=(haystack.indexOf(needle)>-1);

        return result;
    }

    function is_in(needle,haystack)
    {
        return has(haystack,needle);
    }

    return {
        'register':register,
        'check':check,
        'has':has,
        'is_in':is_in
    }
});